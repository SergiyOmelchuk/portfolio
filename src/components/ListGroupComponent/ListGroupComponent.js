/* eslint-disable */
import React, { Fragment } from 'react';
import ListGroupItem from "../common/components/ListGroup/ListGroupItem";
import ListGroup from "../common/components/ListGroup/ListGroup";
import Badge from "../common/components/Badge/Badge";
import Button from "../common/components/Button";

const ListGroupComponent = () => (
    <div>

        <h2><span>1. Base Group list:</span></h2>
        <ListGroup>
            <ListGroupItem>List item 1</ListGroupItem>
            <ListGroupItem>List item 2</ListGroupItem>
            <ListGroupItem>List item 3</ListGroupItem>
            <ListGroupItem>List item 4</ListGroupItem>
        </ListGroup>

        <h2><span>2. Group list with active and disabled elements:</span></h2>
        <ListGroup>
            <ListGroupItem active>List item 1</ListGroupItem>
            <ListGroupItem>List item 2</ListGroupItem>
            <ListGroupItem disabled>List item 3</ListGroupItem>
            <ListGroupItem>List item 4</ListGroupItem>
        </ListGroup>

        <h2><span>3. Group list with custom components:</span></h2>
        <ListGroup>
            <ListGroupItem>
                List item 1
                <Badge value={2} inline />
            </ListGroupItem>
            <ListGroupItem>
                List item 2
                <Badge value="new" inline />
            </ListGroupItem>
            <ListGroupItem>
                List item 3
                <Badge value={10} warning inline />
            </ListGroupItem>
            <ListGroupItem>
                List item 4
                <Button>Update</Button>
            </ListGroupItem>
        </ListGroup>

        <h2><span>4. Group list links:</span></h2>
        <ListGroup>
            <ListGroupItem href="/" active>List item 1</ListGroupItem>
            <ListGroupItem href="/">List item 2</ListGroupItem>
            <ListGroupItem href="/">List item 3</ListGroupItem>
            <ListGroupItem href="/">List item 4</ListGroupItem>
        </ListGroup>

    </div>
);

export default ListGroupComponent;
/* eslint-enable */
