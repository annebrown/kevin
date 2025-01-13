---
title: apt -vs- snap
description: Notes and comparison
lastModified: '2025-01-08'
---

## Descriptoin

apt and snap notes and comparison

Source: [Reddit](https://www.reddit.com/r/Ubuntu/comments/a364ii/proscons_of_snap_vs_apt/) (6 yrs ago)

##  Pros of debs over snaps:

- Smaller packages (no bundle dependencies).
- While snaps are larger, updates are done with deltas, not huge downloads
- Better theme integration.
- Confinement issues don't typically get in your way.
- Debs come from the distribution and are reviewed by numerous people, not just the publisher.
- This completely ignores debs outside of the distro, such as PPAs or debs found online.
- Debs can be updated on your schedule, either automatically or not. Snaps always update automatically, the most you can do is delay it. Snapped apps that typically run for a long time often don't handle having an upgrade happen underneath them very well. I don't mean daemons (those are restarted upon upgrade), I mean apps like Signal which aren't daemons but typically run for long enough that an update might happen while they're still running.

## Pros of snaps over debs:

- Dependencies are bundled, which means you can be sure that you're running exactly what the publisher tested and supports.
- Similar to the last point, snaps are isolated, which means if you remove it, all of its data and dependencies are gone as well.
- Snaps are confined, so you can be reasonably sure that even if you don't necessarily trust the snap publisher, it doesn't own your system.  There are caveats to this, of course. Some types of snaps aren't actually confined (although you need to install those in a special way, so you'll know), and other snaps use interfaces which are inherently insecure, such as X11.
- Debs are typically frozen when an Ubuntu release is cut, and that deb typically won't see an update over the course of the Ubuntu release. Depending on the repo it might see security updates and maybe bugfixes, but that's the exception. However, snaps are outside of the distribution, and can be updated at any time, which means the snap could very well be much newer than the deb.   It's worth pointing out that there are PPAs which allow debs to be updated outside of the distribution as well, but these require putting your trust in a particular person rather than the maintainers of Ubuntu. If you install a deb, you're potentially handing your system over to whoever created it since it has hooks that run as root without any sense of confinement.
