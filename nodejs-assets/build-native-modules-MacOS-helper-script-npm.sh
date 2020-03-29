#!/bin/bash
      # Helper script for Gradle to call npm on macOS in case it is not found
      export PATH=$PATH:/usr/local/lib/node_modules/npm/node_modules/npm-lifecycle/node-gyp-bin:/Users/oceanesalmeron/Documents/ppe/ppe/node_modules/nodejs-mobile-react-native/node_modules/.bin:/Users/oceanesalmeron/Documents/ppe/ppe/node_modules/.bin:/Library/Frameworks/Python.framework/Versions/3.8/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Apple/usr/bin:/Library/Apple/bin:/Library/Frameworks/Python.framework/Versions/3.8/bin
      npm $@
    