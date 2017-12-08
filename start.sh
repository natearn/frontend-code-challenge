#!/bin/bash

# change these for an easier experience
IMAGE_NAME="mcmakler"
CONTAINER="challenge"
COMMAND="sh"

if docker inspect -f '{{.State.Running}}' "$CONTAINER" &> /dev/null
then docker exec -it "$CONTAINER" "$COMMAND"
else docker run -it --rm --name "$CONTAINER" \
  -v $(pwd):/home/node/app \
  -v /home/node/app/node_modules \
  "$IMAGE_NAME" \
  "$COMMAND"
fi
