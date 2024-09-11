import Script from "next/script";
import React from "react";

export const Timeline = () => {
    // 设置起始年份和结束年份
    const startYear = 1950;
    const endYear = 2024; // 你可以根据需要调整结束年份
    const currentYear = 1952; // 默认显示的年份

    // 循环生成年份的 li > a 元素
    const yearList = [];
    for (let year = startYear; year <= endYear; year++) {
        yearList.push(
            <li key={year}>
                <a
                    href={`#${year}`}
                    className={year === currentYear ? "selected" : ""}
                    data-date={`01/01/${year}`}
                >
                    {year}
                </a>
            </li>
        );
    }

    return (
        // START: timeline section
        <section className="cd-horizontal-timeline">
            <div className="timeline">
                <div className="events-wrapper">
                    <div className="events">
                        <ul id="year-list">{yearList}</ul>
                        <span
                            className="filling-line"
                            aria-hidden="true"
                        ></span>
                    </div>
                </div>

                <ul className="cd-timeline-navigation">
                    <li>
                        <a href="#0" className="prev inactive">
                            Prev
                        </a>
                    </li>
                    <li>
                        <a href="#0" className="next">
                            Next
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
};

// export const Timeline = () => {
//     // const ul = document.getElementById("year-list");
//     const ul = React.createElement("ul");

//     // 设置起始年份和结束年份
//     const startYear = 1950;
//     const endYear = 2024; // 你可以根据需要调整结束年份
//     const currentYear = 1952; //默认显示的年份

//     // 循环生成li>a标签
//     for (let year = startYear; year <= endYear; year++) {
//         // 创建li元素
//         const li = React.createElement("li");

//         // 创建a元素
//         const a = React.createElement("a");

//         // 设置a标签的内容和href属性
//         a.textContent = year;
//         a.href = `#${year}`; // 你可以根据需要调整href的内容

//         if (year == currentYear) {
//             a.className = "selected";
//         }

//         // 设置a标签的data-date属性
//         a.setAttribute("data-date", "01/01/" + year);

//         // 将a元素添加到li元素中
//         li.appendChild(a);

//         return li;

//         // 将li元素添加到ul中
//         ul.appendChild(li);
//     }
//     return (
//         // START: timeline section
//         <section class="cd-horizontal-timeline">
//             <div class="timeline">
//                 <div class="events-wrapper">
//                     <div class="events">
//                         <ul id="year-list">
//                             {/* li>a标签将通过JavaScript动态生成 */}
//                         </ul>
//                         <span class="filling-line" aria-hidden="true"></span>
//                     </div>
//                 </div>

//                 <ul class="cd-timeline-navigation">
//                     <li>
//                         <a href="#0" class="prev inactive">
//                             Prev
//                         </a>
//                     </li>
//                     <li>
//                         <a href="#0" class="next">
//                             Next
//                         </a>
//                     </li>
//                 </ul>
//             </div>
//         </section>
//     );
// };
