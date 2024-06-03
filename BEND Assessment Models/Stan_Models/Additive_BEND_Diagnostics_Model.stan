//BEND: Varying Intercepts for Stances & Weeks with Diagnostics
//Jonathan H. Morgan, Ph.D.
//28 May 2024

data {
  int<lower=0> N; // number of data points
  int<lower=0> K; // number of predictors
  int<lower=1> J; // number of stance groups
  int<lower=1> W; // number of weeks
  array[N] int<lower=1, upper=J> stance; // stance group indicator
  array[N] int<lower=1, upper=W> week; // week indicator
  matrix[N, K] X; // design matrix
  vector[N] y; // response variable
}

parameters {
  real alpha; // overall intercept
  vector[K] beta; // coefficients for predictors
  vector[J] alpha_stance; // varying intercepts for stance groups
  vector[W] alpha_week; // varying intercepts for weeks
  real<lower=0> sigma; // standard deviation of residuals
}

model {
  // Priors
  alpha ~ normal(0, 1);
  beta ~ normal(0, 1);
  alpha_stance ~ normal(0, 1);
  alpha_week ~ normal(0, 1);
  sigma ~ cauchy(0, 2);

  // Likelihood
  y ~ normal(X * beta + alpha + alpha_stance[stance] + alpha_week[week], sigma);
}

generated quantities {
  array[N] real y_rep; // predicted transformed counts
  array[N] real y_prior; // prior predictive draws
  real likelihood_density; // likelihood density of observed data

  // Generate posterior predictive draws
  for (i in 1:N) {
    y_rep[i] = normal_rng(X[i, ] * beta + alpha + alpha_stance[stance[i]] + alpha_week[week[i]], sigma);
  }

  // Generate prior predictive draws
  real alpha_prior = normal_rng(0, 1);
  vector[K] beta_prior = normal_rng(rep_vector(0, K), 1);
  vector[J] alpha_stance_prior = normal_rng(rep_vector(0, J), 1);
  vector[W] alpha_week_prior = normal_rng(rep_vector(0, W), 1);
  real sigma_prior = abs(cauchy_rng(0, 2));

  for (i in 1:N) {
    y_prior[i] = normal_rng(X[i, ] * beta_prior + alpha_prior + alpha_stance_prior[stance[i]] + alpha_week_prior[week[i]], sigma_prior);
  }

  // Calculate likelihood density
  likelihood_density = 0;
  for (i in 1:N) {
    likelihood_density += normal_lpdf(y[i] | X[i, ] * beta + alpha + alpha_stance[stance[i]] + alpha_week[week[i]], sigma);
  }
}