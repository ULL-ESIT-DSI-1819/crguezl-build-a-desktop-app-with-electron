# Package your Electron application into a executable file with electron-builder


## CCNokes

We’ve been running our app in a development environment using the
Electron executable. Now let’s learn how to package our app into a
.app or .exe file so that we can distribute it to other users.

Electron doesn't provide this functionality out of the box, so we'll
use a popular and easy-to-use npm package called
electron-builder
to handle the details.
electron-builder
will automatically grab our .ico or .icns file and use that as our app's icon.

* [Repo build-a-desktop-app-with-electron. Folder 11-package](https://github.com/ULL-ESIT-DSI-1819/build-a-desktop-app-with-electron/tree/master/11-package)

## Cameron

In this video we look at how to package our application as well as make it so that a distributed application cannot be tampered with. If you liked the video don't forget to check out the rest of the videos on my channel as well as leave me some feedback so I can improve :)


* [YouTube Video: Development with Electron: Episode 5 - Packaging Applications](https://youtu.be/t6GpARjKwTA)
* [Electron packager tutorial](https://www.christianengvall.se/electron-packager-tutorial/)
    - In this [electron packager](https://github.com/electron-userland/electron-packager) tutorial we will look at how to create MacOS, Windows and Linux executables with an app icon. This is also a continuation of the [Electron app icon](/electron-app-icons/) post, so start there if you haven’t read it (It’s short, i promise).
    - I add this code to the [Electron tutorial app on github](https://github.com/crilleengvall/electron-tutorial-app). Just look at that repo if you want to see all the code.
    - In this tutorial I package the application on Windows, macOS and Ubuntu Linux. There are some information about building Windows apps from non-Windows platforms in the [Electron packager readme](https://github.com/electron-userland/electron-packager#building-windows-apps-from-non-windows-platforms "Electron packager readme").
* [asar](https://github.com/electron/asar): Asar is a simple extensive archive format, it works like tar that concatenates all files together without compression, while having random access support
* [iConvert Icons is an online icon converter to convert PNG to ICO, ICNS, and app icons for Windows, Mac OS X, Linux, iOS, and Android](https://iconverticons.com/online/)
    - Have you ever discovered the perfect icon set, only to find it wasn't available for your particular platform? iConvert solves the problem: With this free online icon converter, you can convert any icon or image into an icon specifically for your platform. It doesn't matter if it's PNG, ICO, ICNS, SVG, or whether you run Windows, Mac OS X, Linux, or have an iOS or Android device. Simply upload a file in one of the supported formats, and iConvert Icons will quickly create your icon!
* [makeicns](http://amnoid.de/icns/makeicns.html) Create icns files from the command line

## Janez Cadez

* [Tutorial *Building desktop applications with Electron* by Janez Cadez](https://www.youtube.com/watch?v=Kwi0eNbyW0g&list=PLaux2QRFlrWw6CtkgwCMPkLjqOyHKCCeR) Video List

In this tutorial, we will take a look at using electron-builder to package and build a ready for distribution Electron app. Since I have a Windows machine, I will show you how to build NSIS installer.

* [Getting started with Electron - electron-builder](https://youtu.be/XEBcBEM9Zj4)
