if [ $# -eq 0 ]; then
  echo "No arguments supplied"
else
  # Loop through up to 3 arguments
  for arg in "$@"
  do
    echo "$arg"
  done
fi