(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var Chat = React.createClass({
    displayName: 'Chat',

    getInitialState: function getInitialState() {
        return {
            name: "codeupstart",
            messages: [{
                name: 'Roger',
                time: new Date(),
                text: 'I sneaked this in using my stuff😘'
            }, {
                name: 'Rodrigo',
                time: new Date(),
                text: 'This is other message crap'
            }]
        };
    },

    setName: function setName() {
        var newName = window.prompt('whats yo name fool?', 'anonyomous');
        this.setState({ name: newName });
    },

    setMsg: function setMsg(event) {

        var text = event.target.value;
        if (event.keyCode == 13 && text !== '') {

            var newMessage = {
                name: this.state.name,
                time: new Date(),
                text: text
            };

            var updatedMessages = this.state.messages.slice();
            updatedMessages.push(newMessage);

            this.setState({ messages: updatedMessages });

            event.target.value = '';
        }
    },

    render: function render() {
        var msgsArr = this.state.messages.map(function (msg, i) {
            return React.createElement(
                'div',
                { key: i, className: 'message' },
                React.createElement(
                    'a',
                    { href: "https://twitter.com/" + msg.name + "/", target: '_blank' },
                    React.createElement('img', { src: "https://twitter.com/" + msg.name + "/profile_image", className: 'message_profile-pic' })
                ),
                React.createElement(
                    'a',
                    { href: "https://twitter.com/" + msg.name + "/", target: '_blank', className: 'message_username' },
                    msg.name
                ),
                React.createElement(
                    'span',
                    { className: 'message_timestamp' },
                    msg.time.toLocaleTimeString()
                ),
                React.createElement(
                    'span',
                    { className: 'message_content' },
                    msg.text
                )
            );
        });

        return React.createElement(
            'div',
            null,
            React.createElement(
                'div',
                { className: 'header' },
                React.createElement(
                    'div',
                    { className: 'team-menu', onClick: this.setName },
                    React.createElement('img', { className: 'connection_icon', src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABmFBMVEUAAAD////////////////////////////////////2+/LR5bKw1Hmfy1KUxz2VyD2izVKz1nnS5rP////A3JuOw0qKwkCNxD+QxT6Sxj6Txz6SxUnC3Jv1+fGXx2GDvkCGwECIwUCLwj+PxD6PxT+JwUCFwECZyGD2+vGSxWF9vEGAvkGDv0CMwz+Wx2GPw2F4ukJ7u0J+vUGBvkGHwUB8u0KSxGG31pp0uEN3uUJ5u0KFv0CCv0B6u0K415p5uU1yt0N/vUF1uEN8u0zG3bFttURwtkR5ukLH3rGWxnlqtERutUR2uUOZx3l6uVZos0VvtkRxt0Nzt0N8ulVisUVlskVns0VzuENmskVfsEVps0VztlZer0VhsEVjsUVstER1t1aOwXhcrkZdr0VgsEaQwnm/2a9YrUZbrka/2rDz+PFhr09XrEZksE6pzplUq0ZVrEZarUaqzpl0tWJRq0dWrEZ1tmJztWJOqUdSq0dxtGJMqEdNqUdQqkdytWKmzJhXrFBKqEdZrU+716+GvXhjr1dIp0hkr1dYtVOVAAAAFHRSTlMAV8/v/wCH+x/n////////////9kvBHZAAAAG7SURBVHgBvdOxjtNAEIDhGe/MZO3sxVaiIJkiSNdQUPJOeQlqXoCCIg/EU9BQHRKg5CT7ErzrHTa+aBOqaxC/tdLK+2kbj+H/hoWhlCmQr0HeyYxyM8mvkWHKoAfBS6cBWEeYugAzf4QGp1SV8DvU/ZjBdN7iud6hdnOTdl+TuALyrUPEwfdu3nc1ipr9AwdIFZPysJylRDfa6cZL2rfgMd9QjO8R0Y+/u7sa4LHZz4wN/MXEyw1hbK1VZdV7PZ1OyufzktsxXADCW5EkXq06Paan02Uoo3kHmAEzJ8HBN6v5qlkqaxTmCdAzQK8Noi6rXwCrJyutepUMAARnXS++3cvm2xvftR0PzAyQAXtwdNChifvFHppBdR003IDCIg6JDOse4DX8WIdo1TwfpaUgqWC9c4eqqg5HF20QZdAMmDlasdHWkrKR03J0A4iIXRTrpba29laiY8YMyOyMKYkXroyROZZuwVTyztAFJPmZKBGq+FxFVBr5BHr7ubd3GICfAM+88qDHHYe/BmbbIAaGKU/Fz10emDxyHxBhgJTg+DGP3O3QbltMBkd92F2H9sWxB772wo9z2z8FfwDHWbdKLDfq1AAAAABJRU5ErkJggg==' }),
                    this.state.name
                ),
                React.createElement(
                    'div',
                    { className: 'channel-menu' },
                    React.createElement(
                        'span',
                        { className: 'channel-menu_name' },
                        React.createElement(
                            'span',
                            { className: 'channel-menu_prefix' },
                            '#'
                        ),
                        ' general'
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'main' },
                React.createElement(
                    'div',
                    { className: 'listings' },
                    React.createElement(
                        'div',
                        { className: 'listings_channels' },
                        React.createElement(
                            'h2',
                            { className: 'listings_header' },
                            'Channels'
                        ),
                        React.createElement(
                            'ul',
                            { className: 'channel_list' },
                            React.createElement(
                                'li',
                                { className: 'channel active' },
                                React.createElement(
                                    'a',
                                    { className: 'channel_name' },
                                    React.createElement(
                                        'span',
                                        { className: 'unread' },
                                        '0'
                                    ),
                                    React.createElement(
                                        'span',
                                        null,
                                        React.createElement(
                                            'span',
                                            { className: 'prefix' },
                                            '#'
                                        ),
                                        'general'
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement('div', { className: 'listings_direct-messages' })
                ),
                React.createElement(
                    'div',
                    { className: 'message-history' },
                    React.createElement(
                        'div',
                        { id: 'message-list' },
                        React.createElement(
                            'div',
                            { className: 'time-divide' },
                            React.createElement('span', { className: 'date' })
                        ),
                        msgsArr
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'footer' },
                React.createElement(
                    'div',
                    { className: 'user-menu' },
                    React.createElement(
                        'p',
                        { className: 'disclaimer' },
                        'This demo is not created by, affiliated with, or supported by Slack Technologies, Inc.'
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'input-box' },
                    React.createElement('input', { type: 'text', className: 'input-box_text', onKeyDown: this.setMsg })
                )
            )
        );
    }
});

ReactDOM.render(React.createElement(Chat, null), document.getElementById('app'));

},{}]},{},[1]);
