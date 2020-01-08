#!/bin/bash
      # Helper script for Gradle to call npm on macOS in case it is not found
      export PATH=$PATH:/var/folders/bd/8rbvxcq113n86z6gcsy1d5t00000gn/T/yarn--1576108900393-0.4700840050859245:/Users/oceanesalmeron/Documents/ppe/ppe/node_modules/nodejs-mobile-react-native/node_modules/.bin:/Users/oceanesalmeron/.config/yarn/link/node_modules/.bin:/usr/local/libexec/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/bin/node_modules/npm/bin/node-gyp-bin:/Library/Frameworks/Python.framework/Versions/3.8/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Apple/usr/bin:/Library/Apple/bin:/Library/Frameworks/Python.framework/Versions/3.8/bin
      npm $@
    