import React from 'react';
import {create} from 'react-test-renderer';
import {Pagination} from "./Pagination"

describe("Paginator component test", () =>{
    test("pages count is 11 but should be showed only 10", () =>{
        const component = create(<Pagination totalItemsCount={11} pageSize={1} portionSize={10}/>)
        const root = component.root;
        let spans = root.findAllByType("span");
        expect(spans.length).toBe(10);
    })
})