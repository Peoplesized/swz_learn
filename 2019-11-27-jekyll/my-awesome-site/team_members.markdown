---
layout: page
title: Peoplesize Team members
permalink: /team-members/
---

# Team

{% for team_member in site.team_members %}
  <h2>{{ team_member.name }} - {{ team_member.position }}</h2>
  <p>{{ team_member.content | markdownify }}</p>
{% endfor %}