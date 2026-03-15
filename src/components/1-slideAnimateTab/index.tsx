import { useEffect, useRef, useState } from 'react'
import styles from './index.module.css'

const SlideAnimateTab = () => {
  // 数组形式的 ref 来存储多个元素的引用
  const elementRef = useRef<any>([])
  const tabList = ['商品', '详情', '评价', '推荐']
  const leftDistance = useRef<number[]>([])
  const [activeIndex, setActiveIndex] = useState(0)
  // 添加状态来触发指示器位置更新
  const [indicatorPosition, setIndicatorPosition] = useState(0)
  // 是否添加动画的状态，初始值为 false，表示首次渲染不添加动画
  const [isAddAnima, setIsAddAnima] = useState(false)

  useEffect(() => {
    // 当组件更新后，遍历 refs 数组，获取每个元素的布局信息
    elementRef.current.forEach((domElement: any, index: number) => {
      if (domElement && leftDistance.current) { // 确保元素存在
        console.log(domElement, 'domElement');
        const rect = domElement.getBoundingClientRect();
        leftDistance.current[index] = rect.left + ((rect.width - 20) / 2) // 指示器宽度的一半
        // 如果是当前激活的项，更新指示器位置
        if (index === activeIndex) {
          console.log(leftDistance.current[index], 'pp');
          setIndicatorPosition(leftDistance.current[index])
        }
        // 是否添加动画，首次渲染不添加动画，后续更新添加动画
        if (activeIndex >= 1) {
          setIsAddAnima(true)
        }
      }
    });
  }, [activeIndex]);




  return (
    <div className={styles.content}>
      <div className={styles.tab}>
        {
          tabList.map((item, index) => (
            <div key={index} className={styles.tabItem} ref={(el) => elementRef.current[index] = el}
              onClick={() => setActiveIndex(index)}>{item}</div>
          ))
        }
      </div>
      {/* 指示器 */}
      <div
        style={{
          width: 20,
          height: 2,
          background: "red",
          position: "absolute",
          transform: `translateX(${indicatorPosition}px)`,
          transition: isAddAnima ? "transform 0.3s ease-in-out" : "none"
        }}
        className={styles.line}
      >
      </div>
    </div>
  )
}

export default SlideAnimateTab