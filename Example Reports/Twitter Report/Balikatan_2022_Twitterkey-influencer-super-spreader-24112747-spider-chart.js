Chart.defaults.plugins.legend.position = 'bottom'

var data = {
labels:['outDegreeCentrality','pageRankCentrality','kcore',],
datasets : [
{
label: 'Tweeter Average',
backgroundColor: 'rgba(255,0,0,0.2)',
borderColor: 'rgba(255,0,0,1)',
borderWidth: 1,
fill:true,
data : [0.00385479,0.00752354,0.0374907,]
},
{
label: 'INDOPACOM',
backgroundColor: 'rgba(0,255,0,0.2)',
borderColor: 'rgba(0,255,0,1)',
borderWidth: 1,
fill:true,
data : [1,0.789154,1,]
},
]
}
var context = document.getElementById('Balikatan_2022_Twitterkey-influencer-super-spreader-24112747-spider-chart').getContext("2d");
var chart = new Chart(context, {
		type: 'radar',
		data: data,
		options: {
				autowidth:false,
			scale: { ticks: { min:0, max:1, display:false}}
		}
});

