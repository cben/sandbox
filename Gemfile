# Added for Jekyll build to GitLab pages
# https://jekyllrb.com/docs/ruby-101/
source "https://rubygems.org"
gem "jekyll"

# Gitlab CI fails on gems moved out of stdlib in Ruby 3.4.0, 3.5.0.  Really should be in jekyll's deps?
gem "base64"
gem "logger"

group :jekyll_plugins do
  # OOTB this only worked on GitLab (unless I set up manual GitHub Actions?);
  # disabling in favor on frontend render _includes/head-custom.html
  #gem "jekyll-kroki"

  gem 'jekyll-commonmark-ghpages'
end
