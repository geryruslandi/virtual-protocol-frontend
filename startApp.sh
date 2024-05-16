#!/bin/bash
docker build --tag 'virtual-protocol-frontend' .
docker run -p 5173:5173 --rm 'virtual-protocol-frontend'
