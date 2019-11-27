## 2019-11-27-Jekyll

* First install Jekyll by run command:

    `gem install bundler jekyll`

* To create static site run:

    `jekyll new <site-name>`

* To run the site first `cd <site-name>`, then run the command:

    `bundle exec jekyll serve`

* To add a page, simply add a `<file-name>.markdown` file in the `<site-name>` directory.

* To add a collection, add
```
    collections:
        team_members:
            output: true
            permalink: /:collection/:name
```

  to the the _config.yml file

* Created `_team_members` folder, and add md file for each instance of the collection

* To check ruby version, type the following command:

    `ruby -v`

* To check where it is installed, run the following command:

    `which ruby`
