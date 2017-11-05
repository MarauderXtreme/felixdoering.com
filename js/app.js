---
# Front Matter to activate Jekyll processing
---

var piwikIsTracked = true;

function updateText() {
	if (piwikIsTracked)
		jQuery('#am-i-tracked').hide();
	else
		jQuery('#am-i-tracked').show();
}

function piwikTrack() {
	jQuery.ajax({
		url: '//server.felixdoering.com/analytics/index.php?module=API&method=AjaxOptOut.doTrack&format=json',
		jsonp: 'callback',
		dataType: 'jsonp',
		success: function (d) {
			piwikIsTracked = true;
			updateText();
		}
	})
}

function piwikUntrack() {
	jQuery.ajax({
		url: '//server.felixdoering.com/analytics/index.php?module=API&method=AjaxOptOut.doIgnore&format=json',
		jsonp: 'callback',
		dataType: 'jsonp',
		success: function (d) {
			piwikIsTracked = false;
			updateText();
		}
	})
}

function piwikTracking() {
	jQuery.ajax({
		url: '//server.felixdoering.com/analytics/index.php?module=API&method=AjaxOptOut.isTracked&format=json',
		jsonp: 'callback',
		dataType: 'jsonp',
		success: function (d) {
			piwikIsTracked = d.value;
			jQuery('#piwik-opt-out').prop('checked', piwikIsTracked);
			updateText();
		},
		error: function (d) {
			piwikIsTracked = false;
			updateText();
		}
	})
}

jQuery(document).ready(function(){

	jQuery(document).foundation();

	/**
	 * @todo This async: false needs to be reverted
	 * Because getJSON is a async request I cannot use this in a for loop.
	 * There needs to be some debugging to find a way to use promises and all
	 * this new fancy async stuff. But for this time I just disable it for
	 * a site with the h1 === Projects
	 */
	if(jQuery('h1').html() === 'Projects') {

		jQuery.ajaxSetup({async:false});

		project_object = JSON.parse('{{ site.data.projects.github | jsonify }}');

		for(user in project_object) {
			for(project in project_object[user]) {
				repo = project_object[user][project].repo;
				repl_repo = repo.replace(/\./g,'');
				{% if site.public_repo_token %}
				jQuery.getJSON("https://api.github.com/repos/" + user + "/" + repo + "?access_token={{ site.public_repo_token }}", function(data) {
				{% else %}
				jQuery.getJSON("https://api.github.com/repos/" + user + "/" + repo, function(data) {
				{% endif %}
					jQuery('#' + user + '-' + repl_repo).text(data.description);
					jQuery('#' + user + '-' + repl_repo + '-watched').text(data.subscribers_count);
					jQuery('#' + user + '-' + repl_repo + '-stared').text(data.stargazers_count);
					jQuery('#' + user + '-' + repl_repo + '-forked').text(data.forks_count);
				});
			}
		}

		jQuery.ajaxSetup({async:true});

	}

	piwikTracking();
	
	jQuery('#piwik-opt-out').change(function () {
		var that = jQuery(this);
		if (!that.is(':checked'))
			piwikUntrack();
		if (that.is(':checked'))
			piwikTrack();
	});

	if (!localStorage.getItem('privacyStatementAck'))
		jQuery('#privacy-statement').show();
		
	jQuery('#ack').click(function(){
		jQuery('#privacy-statement').hide();
		localStorage.setItem('privacyStatementAck', 'true');
	});

});
