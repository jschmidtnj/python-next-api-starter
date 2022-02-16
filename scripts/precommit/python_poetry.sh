#!/bin/bash

# takes 1 argument, the path to the directory of the pyenv project relative
# to the root folder

# abort on errors
set -e

if [ -z "$1" ]; then
  echo "No source directory provided"
  exit 1
fi

BASEDIR=$(dirname $0)

cd "$BASEDIR/../../$1"

# format files
poetry run autopep8 --in-place --recursive .

if ! [[ $* == *--skip-lint* ]]; then
  # lint files
  poetry run pylint src

  # check types
  poetry run mypy --install-types --non-interactive src
fi

echo "done with precommit for $2"

cd - > /dev/null

exit 0
