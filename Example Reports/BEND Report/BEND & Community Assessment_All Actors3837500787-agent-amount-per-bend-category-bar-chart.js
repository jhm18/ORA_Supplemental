Chart.defaults.plugins.legend.position = 'bottom'

var data = {
labels:['Back','Build','Bridge','Boost','Excite','Engage','Explain','Enhance','Neutralize','Negate','Narrow','Neglect','Dismay','Dismiss','Distort','Distract',],
datasets : [
{
label: 'Maneuvering',
backgroundColor: 'rgba(255,0,0,0.2)',
borderColor: 'rgba(255,0,0,1)',
borderWidth: 1,
data : [7,6,12,5,2,9,4,20,2,4,19,15,5,9,0,6,]
},
{
label: 'Maneuvered-Upon',
backgroundColor: 'rgba(0,255,0,0.2)',
borderColor: 'rgba(0,255,0,1)',
borderWidth: 1,
data : [142,0,3,3,0,142,45,142,0,1,142,142,1,7,0,1,]
},
]
}
var context = document.getElementById('BEND & Community Assessment_All Actors3837500787-agent-amount-per-bend-category-bar-chart').getContext("2d");
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

