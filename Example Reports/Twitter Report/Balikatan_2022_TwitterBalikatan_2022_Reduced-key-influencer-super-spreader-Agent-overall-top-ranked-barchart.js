Chart.defaults.plugins.legend.position = 'bottom'

var data = {
labels:['INDOPACOM','US7thFleet','jmsdf_pao_eng','USNavy','PacificMarines','USMC','3d_Marine_Div','PACAF','USARPAC','SecBlinken',],
datasets : [
{
label: 'Agent (Balikatan_2022_Reduced)',
backgroundColor: 'rgba(255,0,0,0.2)',
borderColor: 'rgba(255,0,0,1)',
borderWidth: 1,
data : [1,0.673459,0.597795,0.537388,0.459702,0.389043,0.362054,0.313716,0.246043,0.222408,]
},
]
}
var context = document.getElementById('Balikatan_2022_TwitterBalikatan_2022_Reduced-key-influencer-super-spreader-Agent-overall-top-ranked-barchart').getContext("2d");
var chart = new Chart(context, {
		type: 'bar',
		data: data,
		options: {
			indexAxis:'y',
			autowidth:false,
			scales: {
			yAxes: [{
				ticks: {
					beginAtZero:true
				}
			}]
		}
	}
});

