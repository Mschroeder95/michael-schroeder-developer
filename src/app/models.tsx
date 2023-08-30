import React from "react"

export class PageSection {
    cssClassName: string
    displayName: string
    display: (cssClassName: string) => React.JSX.Element[] | React.JSX.Element

    constructor(cssClassName: string, displayName: string, display: (cssClassName: string) => React.JSX.Element[] | React.JSX.Element) {
        this.cssClassName = cssClassName
        this.displayName = displayName
        this.display = display
    }
}

export class Experience {
    jobTitle: string
    url: string
    start: string
    end: string
    description: string
    tools: string[]

    constructor(jobTitle: string, url: string, start: string, end: string, description: string, tools: string[]) {
        this.jobTitle = jobTitle
        this.url = url
        this. start = start
        this.end = end
        this.description = description
        this. tools = tools
    }
}