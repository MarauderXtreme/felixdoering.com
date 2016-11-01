---
layout: page
---

{% assign playlist = "In A Mood" %}

<div class="large-6 columns profile-info">
  <img src="{{ "/images/playlist/" | prepend: site.baseurl | append: site.data.playlists[playlist].image }}">
</div>
<div class="large-6 columns profile-image">
<ol>
{% for track in site.data.playlists[playlist].tracks %}
<li>{{ track[1].title }} - {{ track[1].artist }} </li>
{% endfor %}
</ol>
</div>
