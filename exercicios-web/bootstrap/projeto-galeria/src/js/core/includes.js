import $ from 'jquery'

const loadHtmlSuccesfulCallbacks = []

export function onLoadHtmlSuccess(callback){
    if(!loadHtmlSuccesfulCallbacks.includes(callback)) {
        loadHtmlSuccesfulCallbacks.push(callback)
    }
}

function loadIncludes(parent) {
    if (!parent) parent = 'body'
    $(parent).find('[wm-include]').each(function(i, e) {
        const url = $(e).attr('wm-include')
        $.ajax({
            url, 
            success(data){
                $(e).html(data)
                $(e).removeAttr('wm-include')

                loadHtmlSuccesfulCallbacks.forEach(callback => callback(data))
                loadIncludes(e)
            }
        })
    })
} 

loadIncludes()