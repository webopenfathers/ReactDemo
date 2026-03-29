import { useEffect, useState } from "react"

const ColumnLayout = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const GAP = 16
  const PAD_THRESHOLD = 768 // 定义一个阈值，当窗口宽度小于这个值时，切换到单列布局
  const numColumns = windowWidth >= PAD_THRESHOLD ? 3 : 2 // 根据窗口宽度决定列数
  // 计算元素宽度
  // (总宽度 - 左右内边距 - 列间距) / 列数
  const itemWidth = (windowWidth - 2 * GAP - (numColumns - 1) * GAP) / numColumns

  // 定义数据列表
  const listData = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
  ]

  useEffect(() => {
    const handleResize = () => {
      console.log(window.innerWidth, "resize")
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])


  // 定义样式
  const styles = () => {
    return {
      container: {
        display: 'flex' as const,
        flexWrap: 'wrap' as const,
        paddingLeft: GAP + 'px',
        paddingRight: GAP + 'px',
        gap: GAP + 'px'
      },
      itemContent: {
        width: itemWidth + 'px',
        height: '100px',
        background: "red"
      }
    }
  }

  const renderItem = (item: string, index: number) => {
    return <div key={index} style={styles().itemContent}>{item}</div>
  }



  return <div style={styles().container}>
    {
      listData.map((item, index) => (renderItem(item, index)))
    }
  </div>
}


export default ColumnLayout