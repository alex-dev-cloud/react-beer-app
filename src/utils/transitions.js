export const PAGE_TRANSITION = {

    from: {
        opacity: 0,
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        translateX: '-1000px',
    },

    enter: {
        opacity: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        translateX: '0px',

    },

    leave: {
        opacity: 0,
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        translateX: '1000px',
        display: 'none'
    },

    config: {duration: 300}

};