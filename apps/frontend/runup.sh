#!/bin/bash

pattern="^FE_"

mkdir /prod-app
grep "$pattern" "/.env-base" > "/prod-app/.env"
grep "$pattern" "/.env-base" > "/app/.env"