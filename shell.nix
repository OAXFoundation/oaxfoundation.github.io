with import <nixpkgs> {};

mkShell {
    jekyll = jekyll.override { withOptionalDependencies = true; };
    buildInputs = [jekyll];
  }


