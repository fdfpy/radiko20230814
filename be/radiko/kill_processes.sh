#!/bin/bash

# Kill processes with specified names
pgrep python3 | xargs kill -9
pgrep Xvfb | xargs kill -9
pgrep chromedriver | xargs kill -9
pgrep chromium-browse | xargs kill -9