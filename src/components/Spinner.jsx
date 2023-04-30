import React from "react";
import "./Style.css";

export default function Spinner({ LodingState }) {
  return (
    LodingState && (
      <div className="spiner" id="spiner-8">
        <div className="lds-roller">
          <div>
            <div>
              <div>
                <div>
                  <div>
                    <div>
                      <div>
                        <div></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
