OpenMeetings Bookmarklet
========================

***Toggles surrounding elements of the OpenMeetings Flash interface***

For moodle 2.4 Online Conferences.

Intent
------

During **Online Conferences** the size of the **OpenMeetings Flash interface** can be to small, even to a point where its usability is questionable.

This [bookmarklet](http://en.wikipedia.org/wiki/Bookmarklet) (JavaScript code as a callable bookmark) toggles ( turn on/off ) the **OpenMeetings Flash interface** to stretch out in the whole browser or shrink back to its original size.

**The bookmarklet should not interfere and / or alter the behaviour of the OpenMeetings Flash interface. More information in the [LICENSE.txt](https://github.com/KingForge/OpenMeetings-Bookmarklet/blob/master/LICENSE.txt)**

For safety and other reasons the bookmarklet works **ONLY** during **Online Conferences** at "technikum-wien.at" and **WILL NOT** alter other sites.

Files
-----

* script.js:   JavaScript source code with comments
* bookmarklet.txt:   bookmarklet version of the **script.js**

Tested on
---------

* Windows **7** Ultimate **x64**:
  * Google Chrome **29**
  * Mozilla Firefox **23**
  * Opera **12**

  * Internet Explorer **9** (Internet Explorer is **not recommended** because its **inconsistencies** and **errors**)

Setup & Usage
-------------

* Download [this](https://github.com/KingForge/OpenMeetings-Bookmarklet/archive/master.zip) repository ( it's a .zip file )
* Extract the .zip file
* Open the **bookmarklet.txt** file ( its content is needed ) **in a text editor** ( i.e.: Notepad )
  
  ![ScreenShot](https://raw.github.com/KingForge/OpenMeetings-Bookmarklet/master/readme-images/01_open_bookmarklet.gif)

* **Select all** its content and **copy to the clipboard** ( this content will be pasted later into/as "bookmarks" )
  
  ![ScreenShot](https://raw.github.com/KingForge/OpenMeetings-Bookmarklet/master/readme-images/02_select_all_and_copy.gif)

* Browsers: ( select your browser, _continue based on the specific wiki page that will open_ )
  * [Google Chrome](https://github.com/KingForge/OpenMeetings-Bookmarklet/wiki/Setup-Google-Chrome) (**recommended browser** for the UAS Vienna Online Conferences)
  * [Mozilla Firefox](https://github.com/KingForge/OpenMeetings-Bookmarklet/wiki/Setup-Mozilla-Firefox)
  * [Opera](https://github.com/KingForge/OpenMeetings-Bookmarklet/wiki/Setup-Opera)
  * [Internet Explorer](https://github.com/KingForge/OpenMeetings-Bookmarklet/wiki/Setup-Internet-Explorer)

Fullscreen & Standard mode
--------------------------

During **Online Conferences** it is useful, most of the time even recommended to enter fullscreen mode.
There could be **some issues** when enter(ing) to fullscreen mode / standard mode.

**Fullscreen mode**: the browser stretch out the entire webpage, the webpage occupy the whole screen
**Standard mode**: the webpage occupy a well defined portion of the screen in the current browser, this is the default case

[**More on these issues and their solutions / workarounds.**](https://github.com/KingForge/OpenMeetings-Bookmarklet/wiki/Fullscreen-&-Standard-mode)

Blocked Content issue
---------------------

Because the **OpenMeetings Flash interface** currently works/processes data from a **non-HTTPS** source, the browser may notify the user about "insecure content"/"content that isn't secure". This issue will be fixed.

[**More on this issue and its workaround.**](https://github.com/KingForge/OpenMeetings-Bookmarklet/wiki/Blocked-Content-issue)

Contribution
------------

**Feel free to participate, improve and fork. I'd be glad to see the improvement of this bookmarklet.**

If any **question/issue/bug** occurs, please post on the [**project's issues page on GitHub**](https://github.com/KingForge/OpenMeetings-Bookmarklet/issues).

License
-------

The bookmarklet, source code and other is offered under the [MIT License](https://github.com/KingForge/OpenMeetings-Bookmarklet/blob/master/LICENSE.txt). Essentially you can do with this software whatever you like, provided that you keep the copyright notice and the license text along.