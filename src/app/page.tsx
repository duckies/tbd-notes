import { Link } from "@/components/Link";

export default function Home() {
  return (
    <main className="">
      <div className="py-20">
        <h1 className="mb-2 text-center text-5xl font-semibold lg:text-left">
          Amirdrassil, the Dream&apos;s Hope
        </h1>
        <p className="text-center text-xl text-gray-100 lg:text-left">
          Night elves and those who pretend to care about them.
        </p>
      </div>

      <div className="prose prose-invert mx-auto max-w-none lg:prose-lg mb-10">
        <h2>Boss Notes</h2>
        <ol>
          <li>
            <a href="#gnarlroot">Gnarlroot</a>
            <a href="#igira">Igira the Cruel</a>
          </li>
        </ol>
      </div>

      <div className="prose prose-invert mx-auto max-w-none lg:prose-lg">
        <h2 id="gnarlroot">Gnarlroot</h2>

        <h3>Phase One</h3>
        <ul>
          <li>
            He periodically places{" "}
            <Link href="https://www.wowhead.com/ptr-2/spell=421898/flaming-pestilence">
              swirlies on ground
            </Link>{" "}
            which spawn dormant Tainted Lashers and Tainted Treants (on mythic).
            A few players are given{" "}
            <Link href="https://www.wowhead.com/ptr-2/spell=421971/controlled-burn">
              large debuff circles
            </Link>{" "}
            that do periodic damage to anyone within and spawning{" "}
            <Link href="https://www.wowhead.com/ptr-2/spell=421972/controlled-burn">
              miasma
            </Link>{" "}
            when it ends that awakens any dormant lashers and treants hit by it.
            Each time an add is woken up it deals{" "}
            <Link href="https://www.wowhead.com/ptr-2/spell=421986">
              raid-wide damage
            </Link>
            .
            <ul>
              <li>
                Active lashers{" "}
                <Link href="https://www.wowhead.com/ptr-2/spell=422053">
                  lob spines
                </Link>{" "}
                at players dealing magic damage and a stacking bleed.
                Furthermore, each active lasher{" "}
                <Link href="https://www.wowhead.com/ptr-2/spell=428992/vicious-thicket">
                  increases the damage
                </Link>{" "}
                done by nearby active lashers by 10%, stacking and becoming
                immune to cc at 15 stacks.
              </li>
              <li>
                Active treants have an{" "}
                <Link href="https://www.wowhead.com/ptr-2/spell=425816">
                  interruptable disorient
                </Link>{" "}
                and periodically slow players with a{" "}
                <Link href="https://www.wowhead.com/ptr-2/spell=425819">
                  massive, ticking magic dot
                </Link>
                .
              </li>
            </ul>
          </li>

          <li>
            Gnarlroot periodically{" "}
            <Link href="https://www.wowhead.com/ptr-2/spell=422026">
              screams
            </Link>
            , chunking the raid and leaving a dot.
          </li>
          <li>
            He has a{" "}
            <Link href="https://www.wowhead.com/ptr-2/spell=422039">
              frontal cone
            </Link>
            . Appears to target random players.
          </li>
          <li>
            <Link href="https://www.wowhead.com/ptr-2/spell=424352">
              Tank swap mechanic
            </Link>{" "}
            does physical and magic damage simultaneously.
          </li>
        </ul>

        <h3>Intermission</h3>

        <p>
          In the intermission Gnarlroot channels{" "}
          <Link href="https://www.wowhead.com/ptr-2/spell=421013">
            potent fertilization
          </Link>
          , taking 99% reduced damage, waking up any dormant adds, pulsing
          raidwide damage, and{" "}
          <Link href="https://www.wowhead.com/ptr-2/spell=421350">
            falling charcoal swirlies
          </Link>{" "}
          need to be soaked or it will damage the entire raid. The{" "}
          <Link href="https://www.wowhead.com/ptr-2/spell=421038">
            ember-charred
          </Link>{" "}
          debuff from soaking does periodic magic damage that can only be
          removed by touching the roots, burning them.
        </p>

        <p>
          Once all the roots are burning, Gnarlroot is{" "}
          <Link href="https://www.wowhead.com/ptr-2/spell=421840">
            incapacitated for 20 seconds
          </Link>
          , dealing large raid-wide damage and taking 100% increased damage
          during. He returns to phase one afterwards with a permanent 10% damage
          buff to all his abilities.
        </p>

        <h3>Commentary</h3>
        <ul>
          <li>
            Testing has some groups split on tanking by the wall (better add
            grouping) vs tanking the boss centrally (better dodging, room for
            dodging, ...etc).
          </li>
          <li>
            This user made a{" "}
            <Link href="https://raidplan.io/plan/GAOmkHOlC7JoZE__">
              raidplan
            </Link>{" "}
            so that in each phase one, the first set of flame circles are meant
            to awaken 3 lashers each with the 4th flame circle person focusing
            on waking up treants. The second round of flame circles can get any
            leftover treants (since extra treants will be annoying in the
            intermission). This will cause 14 lashers to appear in intermission,
            1 short of the CC immunity so they can be burned down. How lethal
            this will be is unclear, as the damage buff they get could be
            problematic. It sounds like yolo waking up lashers and &quot;whoever
            gets a circle that&apos;s closest to a treant goes for the
            treant&quot; prioritization is a simpler strategy for an earlier
            boss such as this. For example, there&apos;s no way to mark players
            in a way where a certain mark is guaranteed to be anywhere remotely
            close to a lasher.
          </li>
          <li>
            First burn phase is roughly 2 minutes in. Seems ideal to blow cds on
            pull and they&apos;ll be back to pair with lust on the second burn
            phase.
          </li>
        </ul>

        <h2 id="igira">Igira the Cruel</h2>
      </div>
    </main>
  );
}
