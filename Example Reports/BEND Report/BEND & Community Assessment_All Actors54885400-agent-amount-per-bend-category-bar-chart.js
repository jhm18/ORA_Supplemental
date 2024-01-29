Chart.defaults.plugins.legend.position = 'bottom'

var data = {
labels:['Back','Build','Bridge','Boost','Excite','Engage','Explain','Enhance','Neutralize','Negate','Narrow','Neglect','Dismay','Dismiss','Distort','Distract',],
datasets : [
{
label: 'Maneuvering',
backgroundColor: 'rgba(255,0,0,0.2)',
borderColor: 'rgba(255,0,0,1)',
borderWidth: 1,
data : [0,4,7,7,1,0,0,7,3,7,7,7,7,7,0,7,]
},
{
label: 'Maneuvered-Upon',
backgroundColor: 'rgba(0,255,0,0.2)',
borderColor: 'rgba(0,255,0,1)',
borderWidth: 1,
data : [158,50,158,157,105,158,58,158,28,158,158,157,157,157,1,158,]
},
]
}
var context = document.getElementById('BEND & Community Assessment_All Actors54885400-agent-amount-per-bend-category-bar-chart').getContext("2d");
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

