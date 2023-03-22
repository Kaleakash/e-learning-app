export class Course {
    constructor(
        public coursename?:string,
        public chapters?:CourseChapter[]
        ){

    }
}

export class CourseChapter{
        constructor(public chapterNumber?:number,
            public topic?:string,
            public topicContents?:string){

        }
}
