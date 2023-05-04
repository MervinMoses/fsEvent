import React from "react";
import { Headers } from "./Headers";
import { useEffect } from "react";

export const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Headers title={"Gallery"} />
      <div class="grids">
        <div class="gallery-container w-3 h-2">
          <div class="gallery-item">
            <div class="image">
              <img src="/img/20.jpg" alt="nature" />
            </div>
          </div>
        </div>

        <div class="gallery-container w-3 h-3">
          <div class="gallery-item">
            <div class="image">
              <img src="/img/22.jpg" alt="people" />
            </div>
          </div>
        </div>

        <div class="gallery-container h-2">
          <div class="gallery-item">
            <div class="image">
              <img src="/img/25.jpg" alt="sport" />
            </div>
          </div>
        </div>

        <div class="gallery-container w-2">
          <div class="gallery-item">
            <div class="image">
              <img src="img/26.jpg" alt="fitness" />
            </div>
          </div>
        </div>

        <div class="gallery-container w-4 h-1">
          <div class="gallery-item">
            <div class="image">
              <img src="img/32.jpg" alt="food" />
            </div>
          </div>
        </div>

        <div class="gallery-container">
          <div class="gallery-item">
            <div class="image">
              <img src="img/30.jpg" alt="travel" />
            </div>
          </div>
        </div>

        <div class="gallery-container h-2">
          <div class="gallery-item">
            <div class="image">
              <img src="img/31.jpg" alt="art" />
            </div>
          </div>
        </div>

        <div class="gallery-container">
          <div class="gallery-item">
            <div class="image">
              <img src="img/35.jpg" alt="cars" />
            </div>
          </div>
        </div>
        <div class="gallery-container w-3 h-3">
          <div class="gallery-item">
            <div class="image">
              <img src="/img/42.jpg" alt="people" />
            </div>
          </div>
        </div>

        <div class="gallery-container h-2">
          <div class="gallery-item">
            <div class="image">
              <img src="/img/37.jpg" alt="sport" />
            </div>
          </div>
        </div>

        <div class="gallery-container w-2">
          <div class="gallery-item">
            <div class="image">
              <img src="img/39.jpg" alt="fitness" />
            </div>
          </div>
        </div>

        <div class="gallery-container w-4 h-1">
          <div class="gallery-item">
            <div class="image">
              <img src="img/40.jpg" alt="food" />
            </div>
          </div>
        </div>

        <div class="gallery-container">
          <div class="gallery-item">
            <div class="image">
              <img src="img/41.jpg" alt="travel" />
            </div>
          </div>
        </div>

        <div class="gallery-container h-2">
          <div class="gallery-item">
            <div class="image">
              <img src="img/44.jpg" alt="art" />
            </div>
          </div>
        </div>

        <div class="gallery-container">
          <div class="gallery-item">
            <div class="image">
              <img src="img/43.jpg" alt="cars" />
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};
