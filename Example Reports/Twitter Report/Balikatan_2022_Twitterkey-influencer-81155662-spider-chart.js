Chart.defaults.plugins.legend.position = 'bottom'

var data = {
labels:['twitter-numberOfFollowers','twitter-wantsToBeInfluencer','twitter-actualInfluencer','twitter-trustedSource','twitter-mostMentioned','twitter-potentialReach','twitter-potentialConnectors','twitter-potentialConsensusLeaders','inDegreeCentrality','twitter-averageMentionsPerTweet','inDegreeCentrality',],
datasets : [
{
label: 'Tweeter Average',
backgroundColor: 'rgba(255,0,0,0.2)',
borderColor: 'rgba(255,0,0,1)',
borderWidth: 1,
fill:true,
data : [0.00516405,0.101545,0.0102923,0.00273812,0.00855676,0.00470866,0.00285312,0.0219951,0.0220275,0.0762176,0.00302667,]
},
{
label: 'US_STRATCOM',
backgroundColor: 'rgba(0,255,0,0.2)',
borderColor: 'rgba(0,255,0,1)',
borderWidth: 1,
fill:true,
data : [0.0263639,0.73913,0.0551448,0.122302,0.0194805,0.00580557,0.231102,0.182172,0.316456,0.178571,1,]
},
]
}
var context = document.getElementById('Balikatan_2022_Twitterkey-influencer-81155662-spider-chart').getContext("2d");
var chart = new Chart(context, {
		type: 'radar',
		data: data,
		options: {
				autowidth:false,
			scale: { ticks: { min:0, max:1, display:false}}
		}
});

