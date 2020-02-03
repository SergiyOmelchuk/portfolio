import React from "react";
import Chip from "../common/components/Chip/Chip";
import "./ChipComponent.module.css";

class ChipComponent extends React.Component {
    state = {
        people: [
            {
                name: "Sergiy"
            },
            {
                name: "Oleg"
            },
            {
                name: "Max"
            }
        ]
    }

    removeChip = (e, id) => {
        this.setState(({people}) => ({
                people: people.filter(({name}) => name !== id),
            })
        )
    }
    addChip = () => {
        this.setState(({people}) => ({
                people: people.push({name: "New"}),
            })

        )
        alert(this.state.people[4].name)
    }

    toggleActiveChip = id => {
        this.setState(({people}) => ({
            people: people.map(({name, active}) => {
                if (name === id) {
                    active = !active;
                }
                return {
                    name,
                    active,
                };
            }),
        }));
    }

    render() {
        return (
            <div>
                <div>
                    <a href="https://www.youtube.com/watch?v=pHPEOmudb4I&list=PLNkWIWHIRwMHC8qUfTzfxPuGrz4o9tmeE&index=8&t=564s">Видео</a>
                </div>
                <div>
                    <h2><span>1. Chip with text</span></h2>
                    <div>
                        <Chip text="User name"/>
                    </div>
                </div>
                <div>
                    <h2><span>2. Chip with long text</span></h2>
                    <div>
                        <Chip text="User name is a very important"/>
                    </div>
                </div>
                <div>
                    <h2><span>3. Chips with icon and close button:</span></h2>
                    <Chip text="Chip" withIcon/>
                    <Chip text="Chip" withClose/>
                </div>
                <div>
                    <h2><span>4. Full Chip:</span></h2>
                    <Chip text="Full Chip" withIcon withClose/>
                </div>
                <div>
                    <h2><span>5. Chip with image:</span></h2>
                    <Chip text="React" withImg imgSrc="https://via.placeholder.com/24" imgAlt="react"/>
                </div>
                <div>
                    <h2><span>6. Chip with actions on Body and cross-icon:</span></h2>
                    <Chip
                        text="React"
                        withImg
                        imgSrc="https://pp.userapi.com/a9QrnDt7kgIb8VkcrCWpCoqd7JRwq5wX_YDr7Q/pOMxeuWzvxg.jpg?ava=1"
                        imgAlt="react"
                        onChipClick={() => {
                            alert('clicked on a chip body');
                        }}
                    />
                    <Chip
                        text="Angular"
                        withImg
                        imgSrc="https://wishtackblog.files.wordpress.com/2017/03/angular.png?w=748"
                        imgAlt="angular"
                        onCloseClick={() => {
                            alert('clicked on a close icon');
                        }}
                        withClose
                    />
                    <Chip
                        text="Vue"
                        withImg
                        imgSrc="https://pbs.twimg.com/profile_images/875996174305472512/upM71pVR_400x400.jpg"
                        imgAlt="vue"
                        onCloseClick={() => {
                            alert('clicked on a close icon');
                        }}
                        onChipClick={() => {
                            alert('clicked on a chip body');
                        }}
                        withClose
                    />
                </div>
                <div>
                    <h2><span>7. Example of using:</span></h2>
                    {this.state.people.map(({name, active}) => (
                            <Chip text={name}
                                  key={name}
                                  id={name}
                                  className={active ? 'active' : ''}
                                  withClose
                                  withIcon
                                  onChipClose={this.removeChip}
                                  onChipClick={this.toggleActiveChip}
                            />
                        )
                    )}
                    <Chip text="add" iconName="plus" withIcon onClick={this.addChip}/>
                </div>

            </div>
        );
    }
}

export default ChipComponent;
