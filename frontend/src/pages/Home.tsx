import type { Component } from "solid-js";

const Home: Component = () => {
  return (
    <div class="m-8 w-auto h-auto p-8 rounded-lg">
      {/* about user panel */}
      <div class="bg-base-300 rounded-xl flex justify-start">
        {/* avatar */}
        <div class="avatar">
          <div class="m-12 w-64 rounded-full">
            <img src="https://api.lorem.space/image/face" />
          </div>
        </div>

        {/* username and about */}
        <div class="m-12 mt-24">
          <h1 class="font-prata text-5xl">Username</h1>
          <p class="font-noto mt-8 text-accent italic">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo natus
            beatae porro nostrum itaque quasi velit facilis cumque voluptates,
            repellat magnam illum odio doloremque nulla at ut? Error, unde
            sequi.
          </p>
        </div>
      </div>

      {/* visual divider */}
      <div class="my-16 border-solid border border-secondary"></div>

      {/* stats */}
      <div class="my-8 flex justify-center bg-accent p-8 rounded-xl">
        <div class="stats stats-vertical lg:stats-horizontal shadow">
          <div class="stat">
            <div class="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-8 h-8 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <div class=" text-black dark:text-white font-mono">
              Total Respect
            </div>
            <div class="stat-value text-primary">25.6K</div>
            <div class="stat-desc">Have a nice day</div>
          </div>

          <div class="stat">
            <div class="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-8 h-8 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div class="text-black dark:text-white font-mono"></div>
            <div class="stat-value text-secondary">2.6M</div>
            <div class="stat-desc">21% more than last month</div>
          </div>

          <div class="stat">
            <div class="stat-figure text-secondary">
              <div class="avatar online">
                <div class="w-16 rounded-full">
                  <img src="https://api.lorem.space/image/car?w=128&h=128" />
                </div>
              </div>
            </div>
            <div class="text-black dark:text-white font-mono">Tasks done</div>
            <div class="stat-value">86%</div>
            <div class="stat-desc text-secondary">31 tasks remaining</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
