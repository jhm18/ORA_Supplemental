Chart.defaults.plugins.legend.position = 'bottom'

var data = {
labels:['INDOPACOM','DeptofDefense','USMC','US_STRATCOM','PacificMarines','3d_Marine_Div','USNavy','ABSCBNNews','IPDefenseForum','US7thFleet',],
datasets : [
{
label: 'Agent (Balikatan_2022_Reduced)',
backgroundColor: 'rgba(255,0,0,0.2)',
borderColor: 'rgba(255,0,0,1)',
borderWidth: 1,
data : [1,0.740663,0.60167,0.589798,0.537501,0.452783,0.445087,0.441456,0.431887,0.390348,]
},
]
}
var context = document.getElementById('Balikatan_2022_TwitterBalikatan_2022_Reduced-key-influencer-Agent-overall-top-ranked-barchart').getContext("2d");
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

