import React, { Fragment } from "react";
import styles from "./App.module.scss";
import { sampleSwimSet } from "./model/swim-set.interfaces";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className={styles.outer_container}>
        <h1>{sampleSwimSet.title}</h1>
        {sampleSwimSet.sets.map(set => (
          <Fragment>
            <h2>{set.title}</h2>
            <div className={styles.set_container}>
              {set.swims.map(swim => (
                <Fragment>
                  <p className={styles.swim}>
                    {swim.blocks.map((block, index) => (
                      <Fragment>
                        {index > 0 && <span> + </span>}
                        {block.repeat > 1 && (
                          <Fragment>
                            <span>{block.repeat}</span>
                            <span> x </span>
                          </Fragment>
                        )}
                        <span>{block.distance}m</span>
                        <span> @{block.time}s</span>
                      </Fragment>
                    ))}
                  </p>
                </Fragment>
              ))}
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default App;
