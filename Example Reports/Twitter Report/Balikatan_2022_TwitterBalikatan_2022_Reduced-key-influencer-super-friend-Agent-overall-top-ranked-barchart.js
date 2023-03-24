Chart.defaults.plugins.legend.position = 'bottom'

var data = {
labels:['CordiDayMM','INDOPACOM','jmsdf_pao_eng','USPacificFleet','katribuphils','SurfaceWarriors','US7thFleet','DESRON_7','USNavy','PanaghiusaPH',],
datasets : [
{
label: 'Agent (Balikatan_2022_Reduced)',
backgroundColor: 'rgba(255,0,0,0.2)',
borderColor: 'rgba(255,0,0,1)',
borderWidth: 1,
data : [1,0.57938,0.476823,0.457298,0.443429,0.393792,0.340049,0.330287,0.330287,0.306751,]
},
]
}
var context = document.getElementById('Balikatan_2022_TwitterBalikatan_2022_Reduced-key-influencer-super-friend-Agent-overall-top-ranked-barchart').getContext("2d");
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

