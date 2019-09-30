# www.oax.org
Site for OAX Foundation

This is the new redesign of the www.oax.org website.

It was created using bootstrap and the airspace theme and also integrates Jekyll for blogging.

Deployment:
1. execute 'jekyll build' to generate the site which will be located in the '_site' directory
2. upload the contents of '_site' to the www.oax.org S3 bucket on AWS.

For incremental deployment (only upload new blog post), you can upload the following files (ensure you upload to correct directory on S3)
$ROOT/robots.html
$ROOT/sitemap.xml
$ROOT/img/blog-images/[whatever new image(s) were added]
$ROOT/blog/index.html
$ROOT/_site/YYYY/MM/DD (upload this entire new directory to the S3 'YYYY' dir)

