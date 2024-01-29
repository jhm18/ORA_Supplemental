Chart.defaults.plugins.legend.position = 'bottom'

var data = {
labels:['Back','Build','Bridge','Boost','Excite','Engage','Explain','Enhance','Neutralize','Negate','Narrow','Neglect','Dismay','Dismiss','Distort','Distract',],
datasets : [
{
label: 'Documents',
backgroundColor: 'rgba(255,0,0,0.2)',
borderColor: 'rgba(255,0,0,1)',
borderWidth: 1,
data : [2103,1252,1292,1118,802,2135,938,2353,234,1166,2089,1655,1093,1581,160,994,]
},
]
}
var context = document.getElementById('BEND & Community Assessment_All Actors-document-analysis-overview-documents-per-bend-category-bar-chart').getContext("2d");
var chart = new Chart(context, {
		type: 'bar',
		data: data,
		options: {
			indexAxis:'x',
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

