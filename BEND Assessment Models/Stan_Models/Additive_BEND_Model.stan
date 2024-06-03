//BEND: Varying Intercepts for Stances & Weeks
//Jonathan H. Morgan, Ph.D.
//26 May 2024

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
  for (i in 1:N) {
    y_rep[i] = normal_rng(X[i, ] * beta + alpha + alpha_stance[stance[i]] + alpha_week[week[i]], sigma);
  }
}
