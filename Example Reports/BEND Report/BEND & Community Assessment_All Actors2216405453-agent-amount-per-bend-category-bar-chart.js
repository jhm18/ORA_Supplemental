Chart.defaults.plugins.legend.position = 'bottom'

var data = {
labels:['Back','Build','Bridge','Boost','Excite','Engage','Explain','Enhance','Neutralize','Negate','Narrow','Neglect','Dismay','Dismiss','Distort','Distract',],
datasets : [
{
label: 'Maneuvering',
backgroundColor: 'rgba(255,0,0,0.2)',
borderColor: 'rgba(255,0,0,1)',
borderWidth: 1,
data : [6,11,15,11,4,6,3,15,0,9,15,6,9,11,1,10,]
},
{
label: 'Maneuvered-Upon',
backgroundColor: 'rgba(0,255,0,0.2)',
borderColor: 'rgba(0,255,0,1)',
borderWidth: 1,
data : [98,89,98,65,76,98,57,102,1,55,102,52,54,60,0,56,]
},
]
}
var context = document.getElementById('BEND & Community Assessment_All Actors2216405453-agent-amount-per-bend-category-bar-chart').getContext("2d");
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

