Explored the mapshaper tool

1. Built two polygons using the [Geojson.io](http://geojson.io) tool.

2. To extract the overlapping polygon, we:

    First installed mapshaper by running:

        npm install -g mapshaper

    On the same path as the geojson files with polygons the following command was used, the `--clip` keyword which `removes features or portions of features that fall outside a clipping area`.

        mapshaper <source> --clip <source-2> -o <output_file>

    in our case the following command was executed:

        mapshaper 1.geojson --clip 2.geojson -o intersect.geojson