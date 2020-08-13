_DEVELOPER-HOWTWO_

**Tool Requirements**

1. [Homebrew Package Manager](https://brew.sh/)
2. Git version control system. Using the Terminal.app, execute the following:
   ```shell
   brew install git
   ```
3. Ruby language. Using the Terminal.app, execute the following:
   ```shell
   brew install ruby
   ```
4. Bundler, Ruby environment manager. Using the Terminal.app, execute the following:
   ```shell
   gem install bundler
   ```
5. [VS Code Editor](https://code.visualstudio.com/) Download the package and install

**SSH keys**

In order to use Github securely, we will generate a SSH key and grant it access to our Github account
Follow the directions outlined [here](https://docs.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)

**Github Repository**
Open your Terminal.app and execute the following commands to clone a copy of the repository to your PC

```shell
cd Documents
git clone https://github.com/OAXFoundation/www.oax.org
cd www.oax.org
bundle install
```

**Running the website on your PC**
In the Terminal.app:

```shell
cd ~/Documents/www.oax.org
bundle exec jekyll serve
```

The first time may take a while as Jekyll generates all the files for our website but afterwards you should see this:

```shell
 ✘ waylandchan@oax-dev  ~/work/oax/www.oax.org   master  bundle exec jekyll serve                                                          [12:00PM]
Configuration file: /Users/waylandchan/work/oax/www.oax.org/_config.yml
            Source: /Users/waylandchan/work/oax/www.oax.org
       Destination: /Users/waylandchan/work/oax/www.oax.org/_site
 Incremental build: disabled. Enable with --incremental
      Generating...
                    done in 6.409 seconds.
 Auto-regeneration: enabled for '/Users/waylandchan/work/oax/www.oax.org'
    Server address: http://127.0.0.1:4000/
  Server running... press ctrl-c to stop.
```

Now that the site is running locally, you can press CMD and click on the http://127.0.0.1/ link (shown in Terminal.app) to open the site in your browser.

You can make changes to your website and they will be automatically detected by Jekyll. To see the changes, simply refresh your browser. Once you are finished, you can exit by hitting CTRL-C in Terminal.app.

**Directory Structure**
