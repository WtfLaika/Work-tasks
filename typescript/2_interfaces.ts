interface Rect {
   readonly id:string,  
   color?: string,
   size: {
       width: number,
       height: number
   }
}

const rect1: Rect = {
    id: '12345',
    size: {
        width: 20,
        height: 10
    },
    color: '#ccc',
}

const rect3 = {} as Rect;
const rect4 = <Rect>{};



interface RectWidthArea extends Rect {
    getArea: () => number
}


const rect5: RectWidthArea = {
    id: '123',
    size: {
        width: 20,
        height: 10
    },

    getArea(): number {
        return this.size.width * this.size.height
    }
}


interface IClock {
    time: Date,
    setTime(date:Date) : void
}

interface Style {
    [key: string]: string,
     
}

const css:Style = {
    border:'1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
}
