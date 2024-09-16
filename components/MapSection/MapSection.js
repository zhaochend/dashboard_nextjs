import { Timeline } from "@components/Timeline";

export const MapSection = () => {
    return (
        <div class="first_container_border">
            <div class="first_container">
                <div class="first_row_container" id="first_row_container">
                    <div id="map_titles" class="map_titles">
                        <h3 class="map_main_title">SPI (1 month)</h3>
                        <p class="map_sub_title">South and Southeast Asia</p>
                    </div>
                    <div id="selector">
                        <div class="select_data">
                            <div className="select_menu">
                                <div className="select">
                                    <span>SPI1</span>
                                    <i class="fas fa-angle-down"></i>
                                </div>
                            </div>
                            <div class="options_list options_list_data">
                                <div class="opt_1 option_01 selected">SPI1</div>
                                <div class="opt_1 option_02">SPI3</div>
                                <div class="opt_1 option_03">SPI6</div>
                                <div class="opt_1 option_04">SPI12</div>
                                <div class="opt_1 option_05">SMPct</div>
                                <div class="opt_1 option_06">Yield</div>
                            </div>
                        </div>
                        <div class="select_region">
                            <div class="select_menu">
                                <div class="select">
                                    <span>Select Region</span>
                                    <i class="fas fa-angle-down"></i>
                                </div>
                            </div>
                            <div class="options_list options_list_region">
                                <div class="opt_2 option_all selected">
                                    South and Southeast Asia
                                </div>
                                <div class="opt_2 option_cam">Cambodia</div>
                                {/* <!-- <div class="opt_2 option_ind">India</div> --> */}
                                <div class="opt_2 option_lao">Laos</div>
                                <div class="opt_2 option_mya">Myanmar</div>
                                <div class="opt_2 option_tha">Thailand</div>
                                <div class="opt_2 option_vie">Vietnam</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="second_row_container">
                    <div id="chart_container"></div>
                    <div class="first_container_legend">
                        <h3 class="georgia_text">Overview</h3>
                        <div class="hist_pred_selector_container selector_container">
                            <label for="hist_data">
                                <input
                                    type="radio"
                                    name="radio_01"
                                    id="hist_data"
                                    defaultChecked
                                />
                                <span>Historical Data</span>
                            </label>
                            <label for="pred_data">
                                <input
                                    type="radio"
                                    name="radio_01"
                                    id="pred_data"
                                />
                                <span>Forecast</span>
                            </label>
                        </div>
                        {/* <!-- Administrative Level --> */}
                        <h3 class="georgia_text">Administrative Level</h3>
                        <div>
                            <div class="space_res_selector_container selector_container">
                                <label for="national">
                                    <input
                                        type="radio"
                                        name="radio_space_res"
                                        class="radio_space_res"
                                        id="national"
                                        defaultChecked
                                    />
                                    <span>Country</span>
                                </label>
                                <label for="provincial">
                                    <input
                                        type="radio"
                                        name="radio_space_res"
                                        class="radio_space_res"
                                        id="provincial"
                                    />
                                    <span>Province/State</span>
                                </label>
                                <label for="grid">
                                    <input
                                        type="radio"
                                        name="radio_space_res"
                                        class="radio_space_res"
                                        id="grid"
                                    />
                                    <span>Grid</span>
                                </label>
                            </div>
                        </div>
                        {/* Date Selection */}
                        <h3 class="georgia_text">Date</h3>
                        <div>
                            <div class="hist_pred_selector_container selector_container">
                                <label for="yearly">
                                    <input
                                        type="radio"
                                        name="radio_time_res"
                                        id="yearly"
                                        defaultChecked
                                    />
                                    <span>Year</span>
                                </label>
                                <label for="monthly">
                                    <input
                                        type="radio"
                                        name="radio_time_res"
                                        id="monthly"
                                    />
                                    <span>Month</span>
                                </label>
                                <label for="daily">
                                    <input
                                        type="radio"
                                        name="radio_time_res"
                                        id="daily"
                                    />
                                    <span>Day</span>
                                </label>
                            </div>
                        </div>
                        <Timeline />
                    </div>
                </div>
            </div>
        </div>
    );
};
