var findMedianSortedArrays = function (nums1, nums2) {
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }
    return [...nums1, ...nums2]

}

console.log(findMedianSortedArrays([1, 3], [2]))