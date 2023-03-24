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
label: 'CordiDayMM',
backgroundColor: 'rgba(0,255,0,0.2)',
borderColor: 'rgba(0,255,0,1)',
borderWidth: 1,
fill:true,
data : [1,0.8,0.5,]
},
]
}
var context = document.getElementById('Balikatan_2022_Twitterkey-influencer-super-friend-1511704288401059840-spider-chart').getContext("2d");
var chart = new Chart(context, {
		type: 'radar',
		data: data,
		options: {
				autowidth:false,
			scale: { ticks: { min:0, max:1, display:false}}
		}
});

