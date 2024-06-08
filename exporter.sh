#!/bin/bash

# Run npm run build command
npm run build

# Check if the build command was successful
if [ $? -eq 0 ]; then
    # Cleanup previous build
    rm -rf ./CODSOFT_1/*
    rm -rf ./CODSOFT_2/*
    rm -rf ./CODSOFT_3/*

    # Copy common files
    cp ./dist/*.{jpeg,ttf,svg,ico,woff} ./CODSOFT_1/
    cp ./dist/*.{jpeg,ttf,svg,ico,woff} ./CODSOFT_2/
    cp ./dist/*.{jpeg,ttf,svg,ico,woff} ./CODSOFT_3/

    # Copy specific files
    cp ./dist/landing.* ./CODSOFT_1/
    cp ./dist/portfolio.* ./CODSOFT_2/
    cp ./dist/calculator.* ./CODSOFT_3/

    echo "Files copied successfully."
else
    echo "Build command failed. Files not copied."
fi