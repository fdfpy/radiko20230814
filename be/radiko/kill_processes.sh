#!/bin/bash

# Kill processes with specified names
sudo pgrep python3 | xargs kill -9
sudo pgrep Xvfb | xargs kill -9
sudo pgrep chromedriver | xargs kill -9
sudo pgrep chromium-browse | xargs kill -9