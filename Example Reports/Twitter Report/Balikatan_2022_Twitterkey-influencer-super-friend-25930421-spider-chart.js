Chart.defaults.plugins.legend.position = 'bottom'

var data = {
labels:['totalDegreeCentrality','totalDegreeCentrality','kcore',],
datasets : [
{
label: 'Tweeter Average',
backgroundColor: 'rgba(255,0,0,0.2)',
borderColor: 'rgba(255,0,0,1)',
borderWidth: 1,
fill:true,
data : [0.00256655,0.0141054,0.0163326,]
},
{
label: 'US7thFleet',
backgroundColor: 'rgba(0,255,0,0.2)',
borderColor: 'rgba(0,255,0,1)',
borderWidth: 1,
fill:true,
data : [0.0428571,0.4,1,]
},
]
}
var context = document.getElementById('Balikatan_2022_Twitterkey-influencer-super-friend-25930421-spider-chart').getContext("2d");
var chart = new Chart(context, {
		type: 'radar',
		data: data,
		options: {
				autowidth:false,
			scale: { ticks: { min:0, max:1, display:false}}
		}
});

