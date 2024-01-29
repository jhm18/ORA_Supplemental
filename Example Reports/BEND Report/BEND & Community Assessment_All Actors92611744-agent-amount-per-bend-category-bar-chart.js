Chart.defaults.plugins.legend.position = 'bottom'

var data = {
labels:['Back','Build','Bridge','Boost','Excite','Engage','Explain','Enhance','Neutralize','Negate','Narrow','Neglect','Dismay','Dismiss','Distort','Distract',],
datasets : [
{
label: 'Maneuvering',
backgroundColor: 'rgba(255,0,0,0.2)',
borderColor: 'rgba(255,0,0,1)',
borderWidth: 1,
data : [2,6,8,7,2,2,0,8,0,4,8,2,4,7,0,4,]
},
{
label: 'Maneuvered-Upon',
backgroundColor: 'rgba(0,255,0,0.2)',
borderColor: 'rgba(0,255,0,1)',
borderWidth: 1,
data : [84,81,86,61,27,85,81,86,2,57,86,5,57,67,0,57,]
},
]
}
var context = document.getElementById('BEND & Community Assessment_All Actors92611744-agent-amount-per-bend-category-bar-chart').getContext("2d");
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

